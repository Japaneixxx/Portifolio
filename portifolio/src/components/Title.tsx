import '../css/Title.css'

type UserProfileProps = {
    name: string;
};

const Title = ({ name }: UserProfileProps) =>{
return(
        <div className='titleBox'>
            {name}
        </div>
)}
export default Title