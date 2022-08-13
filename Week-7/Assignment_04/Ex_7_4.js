//function to check whether an expression is balanced or not.
function bracketsBalanced(expr) {
	//create an empty stack;
	let stack = [];
	// Traversing the Expression
	for (let i = 0; i < expr.length; i++) {
		let x = expr[i];
		if(x == '(' || x == '[' || x == '{'){
			// Push the element in the stack
			stack.push(x);
			continue;
		}// If current character is not opening
		// bracket, then it must be closing.
		// So stack cannot be empty at this point.
		if(stack.length == 0)
		{
			return false;
		}
		let check;
		switch (x) {
			case ')':
				//pop the item and check if it is closed ')' bracket.
				check = stack.pop();
				//if it matches '{' || '[' then return false and break the case;
				if(check == '{' || check == '[')
				{
					return false;
				}
				break;

			case '}':
				//pop the item and check if it is closed '}' bracket.
				check = stack.pop();
				//if it matches '(' || '[' then return false and break the case;
				if(check == '(' || check == '[')
				{
					return false;
				}
				break;

			case ']':
				//pop the item and check if it is closed ']' bracket.
				check = stack.pop();
				//if it matches '{' || '(' then return false and break the case;
				if(check == '(' || check == '{')
				{
					return false;
				}
				break;
		}
	}

	// Check Empty Stack
	return (stack.length == 0);
}

// input expression
let expression = "([{}])";

// Function call
if (bracketsBalanced(expression))
{
	console.log("true");
}else
{
	console.log("false");
}

//Time Complexity:>O(n)
//Space Complexity:>O(n)


