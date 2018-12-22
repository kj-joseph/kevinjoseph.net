import React from "react";

export default class InterestsPage<Props> extends React.Component<any> {

	constructor(props: Props) {
		super(props);
	}

	componentDidMount() {

		window.scrollTo(0, 0);

	}

	render() {

		return (
			<div>
				<h1>Other Interests</h1>
				<p>Spicy jalapeno <a href="https://baconipsum.com/" target="_blank" rel="noopener noreferrer">bacon ipsum</a> dolor amet
					spare ribs pork chop venison brisket, cupim prosciutto tail alcatra tenderloin beef ribs.
					Meatball rump leberkas swine. Capicola filet mignon andouille jerky spare ribs leberkas. Brisket leberkas shank ground round.
					Burgdoggen tri-tip ball tip, cupim short ribs short loin pancetta chicken bacon leberkas shank meatball corned beef.
					Pastrami spare ribs sirloin, pork chop short ribs ham hock buffalo ground round ham frankfurter.</p>

				<p>Rump strip steak ham hock boudin bacon tongue, tri-tip chuck jerky frankfurter turkey short ribs.
					Sirloin chuck prosciutto sausage, short ribs cupim pork loin bresaola tri-tip hamburger pancetta frankfurter.
					Porchetta shoulder flank, hamburger ball tip tongue tenderloin t-bone rump frankfurter turducken ham hock.
					Picanha boudin sirloin bacon pastrami pancetta venison leberkas.
					Kevin short loin ham hock, turkey meatloaf filet mignon pork belly corned beef pastrami swine tail boudin rump bacon jowl.
					Doner cow fatback pig venison beef jerky brisket chicken shankle. Pork belly bresaola prosciutto cupim.</p>

				<p>Prosciutto sausage flank corned beef shoulder tenderloin venison t-bone chicken strip steak.
					Jerky landjaeger jowl, bresaola shankle kevin short ribs flank leberkas picanha filet mignon.
					Doner fatback pastrami kielbasa short loin. Ribeye burgdoggen doner ham hock bresaola kevin rump biltong flank shankle shank pastrami.
					Flank meatball cupim ribeye jowl. Fatback sirloin jerky burgdoggen turducken ground round ham hock pork chop ribeye short ribs.
					Ground round prosciutto turducken ham landjaeger, turkey pastrami.</p>
			</div>
		);

	}

}
