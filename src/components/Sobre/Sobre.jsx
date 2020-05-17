import React from 'react';
import store from'store';
import './sobre.css'

function Sobre() {
		store.remove('loggedIn');
    return(
        <div className="sobre-wrap">
		<section className="projeto">
			<div className="container-sobre">
			
				<h1>Projeto</h1>

					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hendrerit gravida rutrum quisque non tellus. Lacinia quis vel eros donec ac odio tempor orci. Amet purus gravida quis blandit turpis cursus. Dolor sit amet consectetur adipiscing elit. Nibh venenatis cras sed felis eget velit aliquet. Sed arcu non odio euismod. In nisl nisi scelerisque eu ultrices vitae auctor eu augue. Vitae elementum curabitur vitae nunc. Sit amet nisl purus in. Sit amet venenatis urna cursus eget nunc scelerisque viverra. 
						Amet purus gravida quis blandit turpis cursus. Dolor sit amet consectetur adipiscing elit. Nibh venenatis cras sed felis eget velit aliquet. Sed arcu non odio euismod. In nisl nisi scelerisque eu ultrices vitae auctor eu augue. Vitae elementum curabitur vitae nunc. Sit amet nisl purus in. Sit amet venenatis urna cursus eget nunc scelerisque viverra. 
					</p>
			</div>
		</section>

			<section className="equipe">

				<div className="container-sobre">
					<h1>Equipe Tags</h1>

					<p>
						Talento vence jogos, mas trabalho em equipe e comprometimento ganham campeonatos.
					</p>

					<article>
						<ul className="integrantes">
							<li>
							    <img src={require('../../assets/images/gi.jpg')} alt="Giselle" className="membros"/>
									<h3>Giselle </h3>
									<h4>Front End</h4>
									<a href="/">
										<img className="linkedin" src={require('../../assets/images/linkedin.svg')} alt=""/>
									</a>
							</li>

							<li>
							    <img src={require("../../assets/images/mariana.jpg")} alt="Mariana" className="membros" />
									<h3>Mariana</h3>
									<h4>Front End</h4>
									<a href="/">
										<img className="linkedin" src={require("../../assets/images/linkedin.svg")} alt="" />
									</a>
						
							</li>

							<li>
								
									<img src={require('../../assets/images/tiago.jpg')} alt="Tiago" className="membros" />
									<h3>Tiago</h3>
									<h4>Front End</h4>
									<a href="/">
										<img className="linkedin" src={require("../../assets/images/linkedin.svg")} alt=""/>
									</a>
							</li>
						</ul>
					</article>	
				</div>
			</section>			
		</div>				
    )
}

export default Sobre;