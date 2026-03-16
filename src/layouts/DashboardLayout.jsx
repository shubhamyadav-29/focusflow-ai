import Sidebar from "../components/Sidebar";

export default function DashboardLayout({ children }) {
    return(
        <div style={{display:"flex"}}>
            <Sidebar/>
            <div style={{padding:"20px",flex:1}}>
                {children}
            </div>
        </div>
    )
}