//1

const superFilter = ( data ) => {
	var near = [], medium = [], far = []
    data.forEach( d =>
        d.key !== "a" &&
        d.distance <= 10 && far.push( d ) &&
        d.distance < 8 && medium.push( d ) &&
        d.distance < 4 && near.push( d ) )  
	return { near, medium, far }
}