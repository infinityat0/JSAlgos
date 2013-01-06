/*
Problem Definition : 
The game starts when I give you some bears. You can then give back some bears, but you must follow these rules (where n is the number of bears that you have):
If n is even, then you may give back exactly n/2 bears.
If n is divisible by 3 or 4, then you may multiply the last two digits of n and give back this many bears. (By the way, the last digit of n is n%10, and the next-to-last digit is ((n%100)/10).
If n is divisible by 5, then you may give back exactly 42 bears.
The goal of the game is to end up with EXACTLY 42 bears.
For example, suppose that you start with 250 bears. Then you could make these moves:
--Start with 250 bears.
--Since 250 is divisible by 5, you may return 42 of the bears, leaving you with 208 bears.
--Since 208 is even, you may return half of the bears, leaving you with 104 bears.
--Since 104 is even, you may return half of the bears, leaving you with 52 bears.
--Since 52 is divisible by 4, you may multiply the last two digits (resulting in 10) and return these 10 bears. This leaves you with 42 bears.
--You have reached the goal!
*/
var bears = (function () {
	// Add any private members/methods here. 
	return {
		// public methods/properties here.
		/*
		* This method checks all possible ways to reach 42 and sees if any of them does reach 42. 
		* For instance : 84 could reach 42 by 84/2 or [84 - 32 = 52, 52 - 10 = 42]. It'll evaluate both the possibilities.
		* If not, then it returns a false, else true.
		*/
		isBearCountReaching42 : function (n) {
			var retVal = false;
			if (n > 42) {
				return false;
			}
			if (n == 42) {
				return true;
			}
			if (n%5 == 0) {
				retVal |= this.isBearCountReaching42(n -42);
			}
			if (n%3 == 0 || n%4 == 0) {
				var units = n%10, tens = Math.floor((n%100)/10);
				if (!(units == 0 || tens == 0)) {
					retVal |= this.isBearCountReaching42(n - units*tens);
				}
			}
			if (n%2 == 0) {
				retVal |= this.isBearCountReaching42(n/2);
			}
			return retVal;
		}
	};
}());
