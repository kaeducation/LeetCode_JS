// Design an algorithm to encode a list of strings to a string. The
// encoded string is then sent over the network and is decoded back to
// the original list of strings.

// Example
// encoded_string = encode(['kevin', 'is', 'great'])
//                           "5/kevin2/is5/great"

// decoded_array = decode( "5/kevin2/is5/great" )
//                       ['kevin', 'is', 'great']

// Notes
// - Do not use class member/global/static variables to store states. Your
//   encode and decode should be stateless
// - Do not use an library method such as eval or serialize methods. You
//   must implement your OWN encode and decode algorithm

class Codec {
	encode(strs) {}
	decode(str) {}
}

module.exports = Codec;
