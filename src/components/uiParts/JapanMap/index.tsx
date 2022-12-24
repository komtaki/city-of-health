import Link from 'next/link'

import cssStyle from './style.module.scss'

type Props = {
  id: number
  name: string
  enName: string
}

const Prefecture: React.FC<Props> = ({ id, name, enName }) => {
  return (
    <Link href={`/prefectures/${id}/`}>
      <a>
        <div className={cssStyle[enName]}>
          <p>{name}</p>
        </div>
      </a>
    </Link>
  )
}

const JapanMap = () => (
  <div className={cssStyle['japan-map']}>
    <div className={cssStyle['hokkaido-touhoku']}>
      <p className={cssStyle['area-title']}>北海道・東北</p>
      <div className={cssStyle['area']}>
        <Prefecture id={1} name="北海道" enName="hokkaido" />
        <Prefecture id={2} name="青森" enName="aomori" />
        <Prefecture id={5} name="秋田" enName="akita" />
        <Prefecture id={3} name="岩手" enName="iwate" />
        <Prefecture id={6} name="山形" enName="yamagata" />
        <Prefecture id={4} name="宮城" enName="miyagi" />
        <Prefecture id={7} name="福島" enName="fukushima" />
      </div>
    </div>

    <div className={cssStyle['kantou']}>
      <p className={cssStyle['area-title']}>関東</p>
      <div className={cssStyle['area']}>
        <Prefecture id={10} name="群馬" enName="gunma" />
        <Prefecture id={9} name="栃木" enName="tochigi" />
        <Prefecture id={8} name="茨城" enName="ibaraki" />
        <Prefecture id={11} name="埼玉" enName="saitama" />
        <Prefecture id={12} name="千葉" enName="chiba" />
        <Prefecture id={13} name="東京" enName="tokyo" />
        <Prefecture id={14} name="神奈川" enName="kanagawa" />
      </div>
    </div>

    <div className={cssStyle['tyubu']}>
      <p className={cssStyle['area-title']}>中部</p>
      <div className={cssStyle['area']}>
        <Prefecture id={15} name="新潟" enName="nigata" />
        <Prefecture id={16} name="富山" enName="toyama" />
        <Prefecture id={17} name="石川" enName="ishikawa" />
        <Prefecture id={18} name="福井" enName="fukui" />
        <Prefecture id={20} name="長野" enName="nagano" />
        <Prefecture id={21} name="岐阜" enName="gifu" />
        <Prefecture id={19} name="山梨" enName="yamanashi" />
        <Prefecture id={23} name="愛知" enName="aichi" />
        <Prefecture id={22} name="静岡" enName="shizuoka" />
      </div>
    </div>

    <div className={cssStyle['kinki']}>
      <p className={cssStyle['area-title']}>近畿</p>
      <div className={cssStyle['area']}>
        <Prefecture id={26} name="京都" enName="kyoto" />
        <Prefecture id={25} name="滋賀" enName="shiga" />
        <Prefecture id={27} name="大阪" enName="osaka" />
        <Prefecture id={29} name="奈良" enName="nara" />
        <Prefecture id={24} name="三重" enName="mie" />
        <Prefecture id={30} name="和歌山" enName="wakayama" />
        <Prefecture id={28} name="兵庫" enName="hyougo" />
      </div>
    </div>

    <div className={cssStyle['tyugoku']}>
      <p className={cssStyle['area-title']}>中国</p>
      <div className={cssStyle['area']}>
        <Prefecture id={31} name="鳥取" enName="tottori" />
        <Prefecture id={33} name="岡山" enName="okayama" />
        <Prefecture id={32} name="島根" enName="shimane" />
        <Prefecture id={34} name="広島" enName="hiroshima" />
        <Prefecture id={35} name="山口" enName="yamaguchi" />
      </div>
    </div>

    <div className={cssStyle['shikoku']}>
      <p className={cssStyle['area-title']}>四国</p>
      <div className={cssStyle['area']}>
        <Prefecture id={37} name="香川" enName="kagawa" />
        <Prefecture id={38} name="愛媛" enName="ehime" />
        <Prefecture id={36} name="徳島" enName="tokushima" />
        <Prefecture id={39} name="高知" enName="kouchi" />
      </div>
    </div>

    <div className={cssStyle['kyusyu']}>
      <p className={cssStyle['area-title']}>九州・沖縄</p>
      <div className={cssStyle['area']}>
        <Prefecture id={40} name="福岡" enName="fukuoka" />
        <Prefecture id={41} name="佐賀" enName="saga" />
        <Prefecture id={42} name="長崎" enName="nagasaki" />
        <Prefecture id={44} name="大分" enName="oita" />
        <Prefecture id={43} name="熊本" enName="kumamoto" />
        <Prefecture id={45} name="宮崎" enName="miyazaki" />
        <Prefecture id={46} name="鹿児島" enName="kagoshima" />
        <Prefecture id={47} name="沖縄" enName="okinawa" />
      </div>
    </div>
  </div>
)

export default JapanMap
