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
		  checked: false,
		  errors: []
		};

		this.validateEmailAndTerms = this.validateEmailAndTerms.bind(this);
		this.validateName = this.validateName.bind(this);
		this.update = this.update.bind(this);
	}

	getHeader() {
	  if (!this.state.emailValid && !this.state.nameValid) {
		  return 'Sign Up for the TLC Newsletter';
	  } else if (this.state.emailValid && !this.state.nameValid) {
		  return 'Almost done! Please enter your first and last name.';
	  } else if (this.state.emailValid && this.state.nameValid) {
		  console.log('Congratulations!');
		  return 'Thank You for signing up!';
	  }
	}

	generateBtn() {
		if (!this.state.emailValid) {
			return <button type="submit" onClick={ this.validateEmailAndTerms }>Next</button>;
		} else if (this.state.emailValid && !this.state.nameValid) {
			return <button type="submit" onClick={ this.validateName }>Sign Up</button>;
		} else if (this.state.emailValid && this.state.nameValid) {
			return null;
		}
	}

	generateCheckbox() {
	  if (!this.state.emailValid) {
		return(
			<>
				<input type="checkbox" value="policy" onChange={ this.updateCheckbox.bind(this) }/>
				<p className='terms'>
				{` `} I agree to receive information from Discovery Communications in
					accordance with the following {` `}
					<a href="https://www.freeprivacypolicy.com/privacy/view/a2423832df7136c1dbf9fa96749fb82a" target='_blank'>
						Privacy Policy
					</a>
					.
				</p>
			</>
		);
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
		return(
		  <span>Look out for the latest news on your favorite shows.</span>
		);
	  }
	}	

	update(field) {
		return (e) => {
			this.setState({ [field]: e.currentTarget.value });
		};
	}

	updateCheckbox(e) {
		this.setState({ checked: e.currentTarget.checked });
	}
	
	validateEmailAndTerms(e) {
		e.preventDefault();
		let emailValid = this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
		const errors = [];
		if (!emailValid) {
			if (this.state.email.length === 0) {
				errors.push(`Email can't be blank.`);
			} else {
				errors.push(`${this.state.email} is invalid.`);
			}
		}

		if (!this.state.checked) {
			errors.push(`You must agree to the terms.`);
		}
		this.setState({ emailValid: emailValid, errors: errors }, () => console.log(this.state));
	}
	
	validateName(e) {
		e.preventDefault();
		let nameValid = this.state.fname.match(/[A-Z]/i) && this.state.lname.match(/[A-Z]/i);
		const errors = [];
		const name = this.state.fname + this.state.lname;
		if (!nameValid) {
			if (name.length === 0) {
				errors.push(`Name can't be blank.`);
			} else {
				errors.push(`${this.state.fname} ${this.state.lname} is invalid.`);
			}
		}
		this.setState({ nameValid: nameValid, errors: errors }, () => console.log(this.state));
	}

	render() {
		const prompt = this.getHeader();
		const button = this.generateBtn();
		const inputText = this.generateInput();
		const checkbox = this.generateCheckbox();
		const errors = this.state.errors ? this.state.errors : [];

		return (
		  <div className="sign-up-container">
			<form>
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
			  {
				 errors.map( (error, idx) => {
					 return <p key={idx}>{ error }</p>;
				 }) 
			  }
			</div>
		  </div>
		);
	}
}