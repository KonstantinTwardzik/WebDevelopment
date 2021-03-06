function asyncA() 
{
	return new Promise(function (resolve, reject) 
	{
		setTimeout(() => 
		{
			let result = Math.random();
			if (result < 0.2) 
			{
				reject("Result is too low.");
			}
			else 
			{
				resolve(result);
			}
		}, 100);
	});
}

asyncA().then(function (value)
{
	console.log(value);
}).catch(reason => {
	console.error(reason);
});
