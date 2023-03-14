const Contacts = () => {
    return (
		<main className="section">
			<div className="container">
				<h1 className="title-1">Contacts</h1>

				<ul className="content-list">
					<li className="content-list__item">
						<h2 className="title-2">Location</h2>
						<p>Kiev, Ukraine</p>
					</li>
					<li className="content-list__item">
						<h2 className="title-2">Telegram /</h2>
						<p>
							<a href="tel:+447398083103">+44(7398) 08-31-03</a>
							<p></p>
							<a href="tel:+380956549992">+38(095) 654-99-92</a>
						</p>
					</li>
					<li className="content-list__item">
						<h2 className="title-2">Email</h2>
						<p>
							<a href="mailto:skorohodit12@gmail.com">
								skorohodit12@gmail.com
							</a>
						</p>
					</li>
				</ul>
			</div>
		</main>
	);
}

export default Contacts;