import { NavLink } from "react-router-dom";
 
export default function Sidebar(){
    return (
        <div style={{width:"200px",background:"#111",color:"#fff",height:"100vh"
        }}><h2>Focus Flow</h2>

        <nav>
            <NavLink to="/">Dashboard</NavLink><br/>
            <NavLink to="/notes">Notes</NavLink><br/>
            <NavLink to="/tasks">Tasks</NavLink>
        </nav>
        </div>
    )
}