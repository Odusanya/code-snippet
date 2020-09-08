const codeCurl = `
curl -v -X POST https://api.sandbox.paypal.com/v2/invoicing/generate-next-invoice-number \\
-H "Content-Type: application/json" \\
-H "Authorization: Bearer Access-Token"
`;

const codeNode = `
const https = require('https');
const options = {
	hostname: 'api.paystack.co',
	path: '/transaction/verify/:reference',
	method: 'GET',
	headers: {
		Authorization: 'Bearer SECRET_KEY'
	}
};
`;

const codePHP = `
$stripe = new \Stripe\StripeClient('sk_test_BQokikJOvBiI2HlWgH4olfQ2');
$customer = $stripe->customers->create([
	'description' => 'example customer',
	'email' => 'email@example.com',
	'payment_method' => 'pm_card_visa',
]);
echo $customer;
`;

const code = {
	curl: codeCurl,
	node: codeNode,
	php: codePHP,
}

export default code;
