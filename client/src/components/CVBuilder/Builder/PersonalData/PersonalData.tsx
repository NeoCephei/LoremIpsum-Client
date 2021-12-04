import { connect } from 'react-redux'


function PersonalData({userDetail}:any) {

  const {personal_details} = userDetail
  const {id, email, phone_number, image, first_name, last_name, street, city, country, headline} = personal_details[0]

  return (
    <div className="bg-light rounded-container p-4">
      <div className="flex flex-row items-center">
      <img
            className='w-20 h-20 rounded-full mx-8'
            src={image} alt=''/>
        <div className="flex flex-col items-start">
          <p className="font-bold underline">Personal Details</p>
          <p>{first_name} {last_name}</p>
          <p>{email}</p>
          <p>{phone_number}</p>
          <p>{street} {city} {country}</p>
        </div>
      </div>
    </div>
  );
}

//TODO - state & dispatch types
const mapStateToProps = (state: any) => {
  return {
    userDetail: state.personal_details,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalData);