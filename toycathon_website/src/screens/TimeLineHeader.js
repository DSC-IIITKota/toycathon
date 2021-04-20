import React from 'react'
import "./header.css"

function TimeLineHeader() {

    const toggler = () => {
        document.querySelector('.open').addEventListener('click', ()=>{
            document.querySelector('.nav-list').classList.add('active');
        })

        document.querySelector('.close').addEventListener('click', ()=>{
            document.querySelector('.nav-list').classList.remove('active');
        })
    }

    return (
        <header id="header" className="timeLine">
            <div class="container">
                <nav>
                <div class="nav-brand"><a href="/"><img class="ani-logo" style={{width:'80px',height:'100px', marginTop: '-15px'}} src="asd.png"></img></a></div>                   
                 <div class="menu-icons open">
                        <i onClick={toggler} class="icons ion-md-menu"></i>
                    </div>
                    <ul class="nav-list">
                        <div class="menu-icons close">
                            <i onClick={toggler} class="icons ion-md-close"></i>
                        </div>
                        <li class="nav-item">
                            <a href="/" class="nav-link-item current">Home</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default TimeLineHeader
