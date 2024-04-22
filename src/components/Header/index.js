import { CgProfile } from "react-icons/cg";
import './index.css'

const Header = () => (
  <header className="chat-header">
    <div>
      <h4>Information</h4>
      <p>This channel is for Company Wide chatter</p>
    </div>
    <div>
      <p>3/100 <CgProfile size={30} /></p>
    </div>
  </header>
)

export default Header
