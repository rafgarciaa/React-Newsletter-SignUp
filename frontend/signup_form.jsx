import React from 'react';

export default class SignUpForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		  fname: '',
		  lname: '',
		  email: '',
		  emailValid: false,
		  nameValid: false,
		  congrats: 'Congratulations',
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.update = this.update.bind(this);
	}

	getHeader() {
	  if (!this.state.emailValid && !this.state.nameValid) {
		return 'Sign Up for TLC Newsletter.';
	  } else if (this.state.emailValid && !this.state.nameValid) {
		return 'Almost done! Please enter your first and last name.';
	  } else if (this.state.emailValid && this.state.nameValid) {
		return 'Thank You for signing up!';
	  }
	}

	generateBtn() {
		if (!this.state.emailValid) {
			return <button type="submit">Next</button>;
		} else if (this.state.emailValid && !this.state.nameValid) {
			return <button type="submit">Sign Up</button>;
		} else if (this.state.emailValid && this.state.nameValid) {
			return null;
		}
	}

	generateCheckbox() {
	  if (!this.state.emailValid) {
		return(
			<>
				<input type="checkbox"/>
				<span className='terms'>
				{` `} I agree to receive information from Discovery Communications in
					accordance with the following {` `}
					<a href="https://www.freeprivacypolicy.com/privacy/view/a2423832df7136c1dbf9fa96749fb82a" target='_blank'>
						Privacy Policy
					</a>
					.
				</span>
			</>
		)
		
	  }
	}

	generateInput() {
	  if (!this.state.emailValid) {
		return(
			<input type="email" placeholder="enter email address" value={this.state.email} onChange={this.update('email')} />
		);
	  } else if (!this.state.nameValid) {
		return(
		  <>
			<input type="text" placeholder="First Name" value={this.state.fname} onChange={this.update('fname')} />
			<input type="text" placeholder="Last Name" value={this.state.lname} onChange={this.update('lname')} />
		  </>
		);
	  } else if (this.state.emailValid && this.state.nameValid) {
		console.log(this.state.congrats);
		return(
		  <span>Look out for the latest news on your favorite shows.</span>
		);
	  }
	}

	handleSubmit(e) {
	  e.preventDefault();
	  console.log('handle submit');
	  this.validateField();
	}

	renderErrors() {
	  console.log('errors here');
	}
	
	update(field) {
	  return (e) => {
		// debugger
		this.setState({ [field]: e.target.value });
	  };
	}

	validateField() {
	  let emailValid = this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
	  let nameValid = this.state.fname.match(/[A-Z]/i) && this.state.lname.match(/[A-Z]/i);
	  this.setState({ emailValid: emailValid, nameValid: nameValid });
	}

	render() {
		const prompt = this.getHeader();
		const button = this.generateBtn();
		const inputText = this.generateInput();
		const checkbox = this.generateCheckbox();

		return (
		  <div className="sign-up-container">
			<form onSubmit={ this.handleSubmit }>
				<div className="header-prompt">{ prompt }</div>
			  	<div className="input-container">
					{ inputText }
					{ button }
			  	</div>
			  	<div className='privacy-policy'>
			  		{ checkbox }
				</div>
			</form>

			<div className='sign-up-errors'>
			  { this.renderErrors() }
			</div>
		  </div>
		);
	}
}