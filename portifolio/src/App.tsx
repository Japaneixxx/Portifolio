import './css/App.css'
import Header from './components/Header';
import Title from './components/Title';
import Description from './components/Description';
import Image from './components/Image'

function App() {

  return (
    <>
      <Header/>
      <div className='outerBox'>
      <div  className='spacer5'></div>
      <Title name="Nome"></Title>
      <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent luctus massa eu convallis congue. Fusce a arcu hendrerit, suscipit nunc eu, euismod quam. Vestibulum quis est sed magna ullamcorper dignissim eu vel massa. Suspendisse efficitur est vel lectus elementum ultrices. Pellentesque condimentum, elit a porta vestibulum, arcu mi tristique ipsum, elementum condimentum purus massa ultrices orci. Etiam eget sem nisl. Quisque a ipsum dapibus, luctus orci nec, vehicula magna. Pellentesque ut justo quis lectus pretium blandit. Nulla imperdiet metus aliquam leo porta, sed elementum leo gravida.
Aliquam volutpat eu erat at placerat. Integer pharetra justo mauris, lobortis eleifend elit bibendum at. Curabitur sagittis eget nibh ut dictum. Aliquam ornare risus a eros rhoncus, fermentum vulputate tellus ornare. Nulla eleifend dictum dui at rhoncus. Etiam cursus in ipsum in pretium. Donec efficitur est sed tellus blandit, vitae pulvinar arcu pharetra. Integer tincidunt enim nulla, ut convallis urna eleifend vitae.</Description>
      <Image>s</Image>
      </div>
    </>
  )
}

export default App
