import {
  createCanvas,
  registerFont,
  loadImage,
  CanvasRenderingContext2D,
} from 'canvas'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { parse } from 'csv-parse/sync'

const __filename = fileURLToPath(import.meta.url)

const __dirname = path.dirname(__filename)

const getContents = (filename: string) => {
  const dataDirectory = path.join(process.cwd(), 'data')
  const fileContents = fs.readFileSync(`${dataDirectory}${filename}`, 'utf8')

  return parse(fileContents, { cast: true, fromLine: 2 })
}

const getAllPrefectures = (): { id: number; name: string }[] => {
  return getContents('/prefectures.csv').map((prefecture: any) => {
    return { id: prefecture[0], name: prefecture[1] }
  })
}

const getBase = (sum: number) => {
  switch (sum) {
    case 1:
      return { rate: 2.6, additionalHeight: 38 }
    case 2:
      return { rate: 2.4, additionalHeight: 36 }
    case 3:
      return { rate: 2.0, additionalHeight: 34 }
    default:
      return { rate: 2.4, additionalHeight: 36 }
  }
}

const size = { width: 600, height: 315 }
const LINE_HEIGHT = 30

const getH = (sum: number, current: number) => {
  const { rate, additionalHeight } = getBase(sum)
  const base = (size.height * rate) / 7

  return base + additionalHeight * current
}

const renderText = (ctx: CanvasRenderingContext2D, title: string) => {
  // タイトルを元の画像にセットする
  const lines = title.replace('\\n', '\n').split('\n')
  const maxWidth = 500
  const w = size.width / 2
  const sum = lines.length
  const write = (text: string, h: number) => {
    ctx.fillText(text, w, h, maxWidth)
  }

  if (sum === 0 || sum > 3) {
    throw new Error(`Invalid lines: ${sum}`)
  }

  for (const [i, line] of Object.entries(lines)) {
    const currentLineNumber = Number(i) + 1
    const h = getH(sum, currentLineNumber)
    write(line, h)
  }
}

const generateImage = async (text: string, outputPath: string) => {
  const cvs = createCanvas(size.width, size.height)
  const ctx = cvs.getContext('2d')

  const src = path.resolve(__dirname, './og-image.png')
  const image = await loadImage(fs.readFileSync(src))

  // 元の画像を canvas にセットする
  ctx.drawImage(image, 0, 0, size.width, size.height)

  const FONT_FAMILY = 'NotoSansJP-Black.otf'
  const FONT_PATH = path.join(__dirname, './fonts/', FONT_FAMILY)

  registerFont(FONT_PATH, { family: FONT_FAMILY })
  ctx.font = `${LINE_HEIGHT}px ${FONT_FAMILY}`
  ctx.textAlign = 'center'

  renderText(ctx, text)

  const buf = cvs.toBuffer('image/png')

  if (fs.existsSync(outputPath)) {
    fs.unlinkSync(outputPath)
  }

  fs.writeFileSync(outputPath, buf)
}

try {
  const targetDir = path.join(__dirname, '../../public/img/prefectures')
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir)
  }

  getAllPrefectures().forEach((prefecture) => {
    const targetFile = path.join(targetDir, `${prefecture.id}.png`)
    generateImage(`${prefecture.name}の財政力指数ランキング`, targetFile)
    console.log(`generated ${targetFile}`)
  })
} catch (e) {
  console.log(e)
}
