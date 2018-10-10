
const getImageUrl = (self) => {   
    const data =  fetch(`https://source.unsplash.com/collection/1163637`)
    .then(response => self.setState({ url : response.url}))
}

export { getImageUrl };