/*
Blockly.JavaScript['senses_iot_connect'] = function (block) {
	var value_host = Blockly.JavaScript.valueToCode(block, 'host', Blockly.JavaScript.ORDER_ATOMIC) || '(char *)""';
	var value_port = Blockly.JavaScript.valueToCode(block, 'port', Blockly.JavaScript.ORDER_ATOMIC) || '1883';
	var value_client_id = Blockly.JavaScript.valueToCode(block, 'client_id', Blockly.JavaScript.ORDER_ATOMIC) || '(char *)"KidBright32"';
	var value_username = Blockly.JavaScript.valueToCode(block, 'username', Blockly.JavaScript.ORDER_ATOMIC) || '(char *)""';
	var value_password = Blockly.JavaScript.valueToCode(block, 'password', Blockly.JavaScript.ORDER_ATOMIC) || '(char *)""';

	var code = `DEV_IO.senses_iot().connect(${value_host}, ${value_port}, ${value_client_id}, ${value_username}, ${value_password});\n`;
	return code;
};*/

Blockly.JavaScript['senses_config'] = function (block) {
	var value_uid = Blockly.JavaScript.valueToCode(block, 'uid', Blockly.JavaScript.ORDER_ATOMIC) || '(char *)""';
	var value_key = Blockly.JavaScript.valueToCode(block, 'key', Blockly.JavaScript.ORDER_ATOMIC) || '(char *)""';

	var code = `DEV_IO.senses_iot().connect(${value_uid}, ${value_key});\n`;
	return code;
};

Blockly.JavaScript['senses_on_connected'] = function (block) {
	var statements_callback = Blockly.JavaScript.statementToCode(block, 'callback');

	var code = `DEV_IO.senses_iot().onConnected([]() { ${statements_callback} });\n`;
	return code;
};

Blockly.JavaScript['senses_is_connect'] = function (block) {
	var code = 'DEV_IO.senses_iot().isConnected()';
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['senses_send'] = function (block) {
	var value_slot = Blockly.JavaScript.valueToCode(block, 'slot', Blockly.JavaScript.ORDER_ATOMIC) || '1';
	var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC) || '(char *)""';

	var code = `DEV_IO.senses_iot().send(${value_slot}, ${value_value});\n`;
	return code;
};

Blockly.JavaScript['senses_on_received'] = function (block) {
	var value_slot = Blockly.JavaScript.valueToCode(block, 'slot', Blockly.JavaScript.ORDER_ATOMIC) || '1';
	var statements_callback = Blockly.JavaScript.statementToCode(block, 'callback');

	var code = `DEV_IO.senses_iot().add_slot_handle(${value_slot}, []() { ${statements_callback} });\n`;
	return code;
};


Blockly.JavaScript['senses_get_received_as_number'] = function (block) {
	var code = 'DEV_IO.senses_iot().slot_value()';
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['senses_received_is_on'] = function (block) {
	var code = 'DEV_IO.senses_iot().slot_value_is_on()';
	return [code, Blockly.JavaScript.ORDER_NONE];
};
