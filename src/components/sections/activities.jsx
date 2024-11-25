export default function Activities(){
	return (
		<section className='activities'>
			<div className='activity__frame'>
				<h3 className='activity__name'>Ceremonia</h3>

				<p className='activity__place'>A la orilla del mar, Tela</p>
				<p className='activity__time'>03:30 PM</p>
				<iframe
					className="map"
					src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d678.7028680012667!2d-87.44725569862028!3d15.786902963633604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2shn!4v1732246246390!5m2!1sen!2shn" 
					width="400" 
					height="300"
					allowFullScreen="" 
					loading="lazy" 
					referrerPolicy="no-referrer-when-downgrade"
					>
				</iframe>
			</div>

			<div className='activity__frame'>
				<h3  className='activity__name'>Recepción</h3>

				<p className='activity__time'>05:00 PM</p>
				<iframe
					className="map"
					src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d479.916549475485!2d-87.44719361094431!3d15.786417720876527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTXCsDQ3JzExLjMiTiA4N8KwMjYnNTAuNCJX!5e0!3m2!1sen!2shn!4v1732245935704!5m2!1sen!2shn" 
					width="400" 
					height="300"
					allowFullScreen="" 
					loading="lazy" 
					referrerPolicy="no-referrer-when-downgrade"
				>
				</iframe>
			</div>
		</section>
	)
}