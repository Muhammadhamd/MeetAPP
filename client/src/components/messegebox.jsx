import react , {useContext} from "react"
import dummyjust from "../logo.svg"
import EachInbox from "./InInbox"
import Message from "./message"
import { GlobalContext } from "../context/context";
function ChatBox(){
    const { state, dispatch } = useContext(GlobalContext);

    console.log(dispatch)
    const themeHandler = (e)=>{
        try {
            dispatch({
                type: "CHANGE_THEME",
                
              });
        } catch (error) {
            
        }
      
          console.log(state?.darkTheme)
    }
    return(
      <>
        <div className="p-[20px]">
            <button
            onClick={themeHandler}
            >
            <i className="bi bi-moon"></i>
            </button>
        </div>
      <div className="flex justify-center items-center h-[100vh] w-full">
          <div className="border flex rounded shadow max-w-[1000px] w-full h-[500px]">
            <div  className="pl-[15px] pr-[20px] w-[400px] px-[20px]">
                <h1 className="font-bold text-2xl my-[10px]">InBox</h1>
                <div className="flex flex-col  overflow-scroll h-[440px]">
                    <EachInbox name="MUhammad Hamd" img={dummyjust} />
                    <EachInbox name="MUhammad ALi" img={dummyjust} />
                    <EachInbox name="Karan Kumar" img={dummyjust} />
                    <EachInbox name="Mike tyson" img={dummyjust} />
                    <EachInbox name="MUhammad Hamd" img={dummyjust} />
                </div>
            </div>
            <div className="flex flex-col justify-between  p-[15px] w-[600px]">
                <div className="flex items-center gap-[5px]  h-[70px] border-b px-[10px] w-full">
                    <div className="w-[50px] h-[50px] overflow-hidden rounded-full">
                        <img className="w-full" src={dummyjust} alt="" />
                    </div>
                    <h1 className="font-semibold text-xl">Muhammad Hamd</h1>
                </div>
                <div className="h-[340px]">
                    <Message message="hey Hamd here how are you buddy?" role='othermsg' dp={dummyjust}  />
                    <Message message="bro are you there?" role='othermsg' dp={dummyjust}  />
                    <Message message="ohh i was sleeping how are you hamd?" role='myMsg'  dp={dummyjust} />
                </div>
                <div className="flex w-full items-center  border rounded-[5px] overflow-hidden ">
                    <input className="py-[7px] px-[10px] w-full" type="text" placeholder="Enter your Message Here...."/>
                    <button className="bg-violet-500 text-white  py-[7px] px-[12px]"><i className="fa fa-send"></i>Send</button>
                </div>
            </div>
        </div>
      </div></>
    )

}
export default ChatBox 