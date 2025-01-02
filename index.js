const element = (
    <div className='congrats-card-main-background-conatiner'>
      <h1 className='congrats-card-main-heading'> Congratulations </h1>
      <div className='congrats-card-inner-conatiner'>
        <img
          className='congrats-card-image'
          src='https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png'
        />
        <h1 className='congrats-card-profile-name'> Kiran V </h1>
        <p className='congarts-card-profile-paragarph paragarph-one'>
          Vishnu Institute of Computer Education and Technology,
        </p>
        <p className='congarts-card-profile-paragarph paragraph-two'>
          Bhimavaram
        </p>
        <img
          className='congrats-card-image'
          src='https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png'
        />
      </div>
    </div>
  )
  
ReactDOM.render(element, document.getElementById('root'))
  