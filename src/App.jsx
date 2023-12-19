import './App.css'
import fire from './assets/fire.png'
import Casinoball from './assets/Casino ball.png'
import Rocket from './assets/Rocket.png'
import Bell from './assets/Bell.png'
import Cards from './assets/Cards.png'
import Dragon from './assets/Dragon.png'
import Diamond from './assets/Diamond.png'
import Lion from './assets/Lion.png'
import Pig from './assets/Pig.png'
import Book from './assets/Book.png'
import Zombie from './assets/Zombie.png'
import Cloud from './assets/Cloud.png'
import GradianRound from './assets/Gradiant Round.png'
import Pigflower from './assets/Pig flower.png'
import RoundStar from './assets/Round Star.png'
import Sharpstar from './assets/Sharp star.png'
import Tree from './assets/Tree.png'
import Zombiebg from './assets/Zombie bg.png'


function App() {
  return (
    <>
      <div className='grid-container'>
        <div className='box-1 item-1'>
          <img className='img-1' src='https://cric-match-tool.s3.ap-south-1.amazonaws.com/front-office/assets/TopGames/bet-gif.webp' alt='img-1' />
        </div>
        <div className='box-2 item-2'>
          <div className='list_box list_1'>
            <div className='list_child_1'>
              <img src={fire} alt='fire' className='list_child_1_img' />
              <span className='list_child_1_text'><i>1</i></span>
            </div>
            <div className='list_child_2'>
              <img src={''} className='list_child_2_img_back' />
              <div>
                <img src={Casinoball} alt='fire' className='list_child_2_img' />
              </div>
            </div>
            <div className='list_child_3'>
              <span className='list_child_3_text_1'>KENO</span>
              <span className='list_child_3_text_2'>Turbo games</span>
            </div>
          </div>
        </div>
        <div className='box-2 item-3'>
          <div className='list_box list_2'>
            <div className='list_child_1'>
              <img src={fire} alt='fire' className='list_child_1_img' />
              <span className='list_child_1_text'><i>2</i></span>
            </div>
            <div className='list_child_2'>
              <img src={Cloud} className='list_cloud1_img_back' />
              <div>
                <img src={Rocket} alt='Rocket' className='list_child_2_img' />
              </div>
              <img src={Cloud} className='list_cloud2_img_back' />
            </div>
            <div className='list_child_3'>
              <span className='list_child_3_text_1'>AVIATOR</span>
              <span className='list_child_3_text_2'>Crash games</span>
            </div>
          </div>
        </div>
        <div className='box-2 item-4'>
          <div className='list_box list_3'>
            <div className='list_child_1'>
              <img src={fire} alt='fire' className='list_child_1_img' />
              <span className='list_child_1_text'><i>3</i></span>
            </div>
            <div className='list_child_2'>
              <img src={Tree} className='list_tree1_img_back' />
              <div>
                <img src={Bell} alt='Bell' className='list_child_2_img' />
              </div>
              <img src={Tree} className='list_tree2_img_back' />
            </div>
            <div className='list_child_3'>
              <span className='list_child_3_text_1'>40 CASH BALLS</span>
              <span className='list_child_3_text_2'>Slots</span>
            </div>
          </div>
        </div>
        <div className='box-2 item-5'>
          <div className='list_box list_4'>
            <div className='list_child_1'>
              <img src={fire} alt='fire' className='list_child_1_img' />
              <span className='list_child_1_text'><i>4</i></span>
            </div>
            <div className='list_child_2'>
              <img src={RoundStar} className='list_roundStar1_img_back' />
              <div>
                <img src={Cards} alt='Cards' className='list_child_2_img' />
              </div>
              <img src={RoundStar} className='list_roundStar2_img_back' />
            </div>
            <div className='list_child_3'>
              <span className='list_child_3_text_1'>BACCARAT</span>
              <span className='list_child_3_text_2'>Baccarat</span>
            </div>
          </div>
        </div>
        <div className='box-2 item-6'>
          <div className='list_box list_5'>
            <div className='list_child_1'>
              <img src={fire} alt='fire' className='list_child_1_img' />
              <span className='list_child_1_text'><i>5</i></span>
            </div>
            <div className='list_child_2'>
              <img src={Cloud} className='list_cloud1_img_back' />
              <div>
                <img src={Dragon} alt='Dragon' className='list_child_2_img' />
              </div>
              <img src={Cloud} className='list_cloud2_img_back' />
            </div>
            <div className='list_child_3'>
              <span className='list_child_3_text_1'>DRAGON'S FLOWER</span>
              <span className='list_child_3_text_2'>Slots</span>
            </div>
          </div>
        </div>
        <div className='box-2 item-8'>
          <div className='list_box list_6'>
            <div className='list_child_1'>
              <img src={fire} alt='fire' className='list_child_1_img' />
              <span className='list_child_1_text'><i>6</i></span>
            </div>
            <div className='list_child_2'>
              <img src={Sharpstar} className='list_sharpstar1_img_back' />
              <img src={Sharpstar} className='list_sharpstar2_img_back' />
              <div>
                <img src={Diamond} alt='Diamond' className='list_child_2_img' />
              </div>
            </div>
            <div className='list_child_3'>
              <span className='list_child_3_text_1'>DIAMONDS</span>
              <span className='list_child_3_text_2'>Slots</span>
            </div>
          </div>
        </div>
        <div className='box-2 item-9'>
          <div className='list_box list_7'>
            <div className='list_child_1'>
              <img src={fire} alt='fire' className='list_child_1_img' />
              <span className='list_child_1_text'><i>7</i></span>
            </div>
            <div className='list_child_2'>
              <img src={GradianRound} className='list_GradianRound1_img_back' />
              <div className='list_GradianRound1_img'>
                <img src={Lion} alt='Lion' className='list_child_2_img' />
              </div>
            </div>
            <div className='list_child_3'>
              <span className='list_child_3_text_1'>9 LIONS</span>
              <span className='list_child_3_text_2'>Slots</span>
            </div>
          </div>
        </div>
        <div className='box-2 item-10'>
          <div className='list_box list_8'>
            <div className='list_child_1'>
              <img src={fire} alt='fire' className='list_child_1_img' />
              <span className='list_child_1_text'><i>8</i></span>
            </div>
            <div className='list_child_2'>
              <img src={Pigflower} className='list_pigflower1_img_back' />
              <div>
                <img src={Pig} alt='Pig' className='list_child_2_img' />
              </div>
              <img src={Pigflower} className='pigflower2_img_back' />
            </div>
            <div className='list_child_3'>
              <span className='list_child_3_text_1'>BIG BAD WOLF</span>
              <span className='list_child_3_text_2'>Slots</span>
            </div>
          </div>
        </div>
        <div className='box-2 item-11'>
          <div className='list_box list_9'>
            <div className='list_child_1'>
              <img src={fire} alt='fire' className='list_child_1_img' />
              <span className='list_child_1_text'><i>9</i></span>
            </div>
            <div className='list_child_2'>
              <img src={Sharpstar} className='list_bookstar1_img_back' />
              <img src={Sharpstar} className='list_bookstar2_img_back' />
              <div>
                <img src={Book} alt='Book' className='list_child_2_img' />
              </div>
            </div>
            <div className='list_child_3'>
              <span className='list_child_3_text_1'>BOOK OF EYE</span>
              <span className='list_child_3_text_2'>Slots</span>
            </div>
          </div>
        </div>
        <div className='box-2 item-7'>
          <div className='list_box list_10'>
            <div className='list_child_1'>
              <img src={fire} alt='fire' className='list_child_1_img' />
              <span className='list_child_1_text'><i>10</i></span>
            </div>
            <div className='list_child_2'>
              <img src={Zombiebg} className='list_zombiebg1_img_back' />
              <div className='list_GradianRound1_img'>
                <img src={Zombie} alt='Zombie' className='list_child_2_img' />
              </div>
            </div>
            <div className='list_child_3'>
              <span className='list_child_3_text_1'>100 ZOMBIES</span>
              <span className='list_child_3_text_2'>Slots</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
