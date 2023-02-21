import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Profile from './Profile';
import ProfileClass from './ProfileClass';
import UserContext from '../utils/UserContext';

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log('parent constructor');
  }
  componentDidMount() {
    // console.log('parent componentDidMount');
  }

  render() {
    // console.log('parent render fn');
    return (
      <div className='p-2 m-2'>
        <h1 className='m-2 p-2 text-center text-2xl font-bold'>This is 'About Us' Page</h1>
        <hr />
        <UserContext.Consumer>
          {/* {(value) => console.log(value)} - Syntax will be like this for Consumer*/}
          {({ user }) => (
            <div className='m-2 p-2'>
              <p className='font-semibold'>This section is use case of Context API</p>
              <h4 className='text-violet-700 font-semibold'>{user.name}</h4>
              <h4 className='text-violet-400 font-semibold'> {user.email} </h4>
            </div>
          )}
        </UserContext.Consumer>
        {/* <Outlet /> */}
        <hr />
        <Profile name={'Piyush-Function'} />
        <hr />
        <ProfileClass name={'Piyush-Class-1'} child={'First Child'} />
        {/* <ProfileClass name={'Piyush-Class-2'} child={'Second Child'} /> */}
        <hr />
      </div>
    );
  }
}

export default About;
