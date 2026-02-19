import Router from "next/router";

function Navbar(){

    return(
    <>
    <div>
            <nav id='navbar'>
                <ul>
                    {/*  */}
                    <li><Router href="components/homepage">HOME</Router></li>
                    <li><Router href="components/random">DICE ROLLER</Router></li>
                    <li><Router href="components/notes">NOTEPAD</Router></li>
                </ul>
            </nav>
        </div>
    </>
    );

}

export default Navbar;