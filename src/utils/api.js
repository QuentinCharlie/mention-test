export const getMentions = async () => {
  let mentions;
  var options = { 
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${process.env.REACT_APP_API_TOKEN}`
    }
  };
  await fetch(
    `${process.env.REACT_APP_API_URL}/accounts/${process.env.REACT_APP_ACCOUNT_ID}/alerts/${process.env.REACT_APP_ALERT_ID}/mentions`,
    options
  )
  .then(response => response.json())
  .catch(error => console.error(error))
  .then(data => mentions = data?.mentions);
  return mentions;
}