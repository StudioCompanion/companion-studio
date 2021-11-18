import React from 'react'

const form = () => {
  return (
    <div>
      <form
        action="https://companionstudio.substack.com/api/v1/free?nojs=true"
        target="_blank"
        method="post"
      >
        <label>
          email
          <input name="email" type="email"></input>
        </label>
        <button type="submit" value="Submit">
          Submit
        </button>
      </form>
    </div>
  )
}

export default form
