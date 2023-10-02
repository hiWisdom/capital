
import './include/Footer.css'


function Footer() {


  return (

      <>

      <footer className="footer">
  	 <div className="container">
  	 	<div className="row">
			
  	 		<div className="footer-col">
  	 			<h4>About</h4>
  	 			<ul>
  	 				<li><a href="/submitapplication" >Submit Application</a></li>
  	 				<li><a href="/account">Check Application</a></li>
		
  	 			</ul>
  	 		</div>

  	 		<div className="footer-col">
  	 			<h4>Racker</h4>
  	 			<ul>
  	 				<li><a href="#">© 2023</a></li>
  	 			</ul>
  	 		</div>
            

  	 	</div>
  	 </div>
  </footer>

      </>
      
  )
}

export default Footer;