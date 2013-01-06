var MATH2 = (function () {
	// private methods here. 
	var calculateGCD = function (numerator, denominator) {
		var remainder = numerator % denominator ;
		if (remainder === 0) {
			return denominator ;
		}
		else {
			return calculateGCD(denominator, remainder);
		}
	};

	return {
		/*
		* This method calculates the LCM of 2 numbers. 
		* It's calculation is this way LCM(m,n) = (m*n) / GCD(m,n)
		* It uses Euclid's algorithm for caluclating the GCD(m,n)
		*/
		LCM : function (m, n) {
			return (m*n) / GCD(m, n);
		},
		/*
		* Returns the GCD of 2 numbers m, n. 
		* It's calulation is based on Euclid's algorithm.
		* Euclid's Algortithm states that GCD(m,n) = GCD(n, m%n) where m > n
		* It thus, recursively computes the GCD of (m,n) by reducing the sample set.
		*/
		GCD : function (m, n) {
			var numerator = m > n ? m : n, denominator = m > n ? n : m ;
			return calculateGCD(numerator, denominator);
		}
	};
}());
