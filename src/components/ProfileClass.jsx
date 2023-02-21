import React from 'react';

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    //create state
    this.state = {
      userInfo: {
        name: 'Dummy Name',
        location: 'Dummy Location',
      },
    };
    console.log('child constructor-' + this.props.child);
  }

  async componentDidMount() {
    console.log('child componentDidMount-' + this.props.child);
    //Best place to make API calls because it'll render after constructor & render function only
    const data = await fetch('https://api.github.com/users/Piyush-TheDeveloper');
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  componentDidUpdate() {
    console.log('child component Did Update');
  }

  componentWillUnmount(){
    //is used to clean up things which we made in componentDidMount. Eg.-setInterval in componentDidMount
    // then we need to clean up in componentWillUnMount by using clearInterval
    //else it will not stop rendering even after we moved to different component
    console.log('child component Will Unmount');
  }
  render() {
    // const { count, count2 } = this.state; //destructuring
    console.log('child render fn-' + this.props.child);
    const { name, location, avatar_url } = this?.state?.userInfo;
    return (
      <div className='m-2 p-2'>
        <h2 className='font-bold'>This is Profile Class Component</h2>
        <img src={avatar_url} alt='Piyush Avatar' className='rounded-lg w-48 border shadow-lg my-2' />
        <h3 className='text-green-700 font-semibold'>Name: {name}</h3>
        <h3 className='text-red-700 font-semibold'>Location: {location}</h3>
        {/* <button
          onClick={() => {
            //WE DO NOT MUTATE STATE DIRECTLY
            //Do Not= this.state = something
            this.setState({
              count: count + 1,
              count2: count2 * 2,
            });
          }}
        >
          Class Counter
        </button> */}
      </div>
    );
  }
}

export default ProfileClass;
