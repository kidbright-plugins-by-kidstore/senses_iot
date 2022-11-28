Blockly.Blocks['senses_config'] = {
	init: function () {
		this.jsonInit({
			"message0": Blockly.Msg.SENSES_CONFIGS_MESSAGE,
			"args0": [
				{
					"type": "input_dummy"
				},
				{
					"type": "input_value",
					"name": "uid",
					"check": "String",
					"align": "RIGHT"
				},
				{
					"type": "input_value",
					"name": "key",
					"check": "String",
					"align": "RIGHT"
				}
			],
			"previousStatement": null,
			"nextStatement": null,
			"colour": 180,
			"tooltip": Blockly.Msg.SENSES_CONFIGS_TOOLTIP,
			"helpUrl": ""
		});
	},
	xmlToolbox: function() {
		return `
			<block type="senses_config">
				<value name="uid">
					<shadow type="basic_string">
						<field name="VALUE">--UID--</field>
					</shadow>
				</value>
				<value name="key">
					<shadow type="basic_string">
						<field name="VALUE">--Device-Key--</field>
					</shadow>
				</value>
			</block>
		`;
	}
};

Blockly.Blocks['senses_on_connected'] = {
	init: function () {
		this.jsonInit({
			"message0": Blockly.Msg.SENSES_ON_CONNECTED_MESSAGE,
			"args0": [
				{
					"type": "input_dummy"
				},
				{
					"type": "input_statement",
					"name": "callback"
				}
			],
			"previousStatement": null,
			"nextStatement": null,
			"colour": 180,
			"tooltip": Blockly.Msg.SENSES_ON_CONNECTED_TOOLTIP,
			"helpUrl": ""
		});
	}
};

Blockly.Blocks['senses_is_connect'] = {
	init: function () {
		this.jsonInit({
			"message0": Blockly.Msg.SENSES_IS_CONNECTED_MESSAGE,
			"output": [
				"Number",
				"Boolean"
			],
			"colour": 180,
			"tooltip": Blockly.Msg.SENSES_IS_CONNECTED_TOOLTIP,
			"helpUrl": ""
		});
	}
};

Blockly.Blocks['senses_send'] = {
	init: function () {
		this.jsonInit({
			"message0": Blockly.Msg.SENSES_SEND_MESSAGE,
			"args0": [
				{
					"type": "input_value",
					"name": "slot",
					"check": [
						"Boolean",
						"Number",
						"String"
					],
					"align": "RIGHT"
				},
				{
					"type": "input_value",
					"name": "value",
					"check": [
						"Boolean",
						"Number",
						"String"
					],
					"align": "RIGHT"
				}
			],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 180,
			"tooltip": Blockly.Msg.SENSES_SEND_TOOLTIP,
			"helpUrl": ""
		});
	},
	xmlToolbox: function() {
		return `
			<block type="senses_send">
				<value name="slot">
					<shadow type="math_number">
						<field name="VALUE">1</field>
					</shadow>
				</value>
				<value name="value">
					<shadow type="math_number">
						<field name="VALUE">0</field>
					</shadow>
				</value>
			</block>
		`;
	}
};

Blockly.Blocks['senses_on_received'] = {
	init: function () {
		this.jsonInit({
			"message0": Blockly.Msg.SENSES_ON_RECEIVE_MESSAGE,
			"args0": [
				{
					"type": "input_value",
					"name": "slot",
					"check": [
						"Boolean",
						"Number",
						"String"
					],
					"align": "RIGHT"
				},
				{
					"type": "input_dummy"
				},
				{
					"type": "input_statement",
					"name": "callback"
				}
			],
			"previousStatement": null,
			"nextStatement": null,
			"colour": 180,
			"tooltip": Blockly.Msg.SENSES_ON_RECEIVE_TOOLTIP,
			"helpUrl": ""
		});
	},
	xmlToolbox: function() {
		return `
			<block type="senses_on_received">
				<value name="slot">
					<shadow type="math_number">
						<field name="VALUE">1</field>
					</shadow>
				</value>
			</block>
		`;
	}
};

Blockly.Blocks['senses_get_received_as_number'] = {
	init: function () {
		this.jsonInit({
			"message0": Blockly.Msg.SENSES_GET_RECEIVED_AS_NUMBER_MESSAGE,
			"output": [
				"Number",
				"Boolean"
			],
			"colour": 180,
			"tooltip": Blockly.Msg.SENSES_GET_RECEIVED_AS_NUMBER_TOOLTIP,
			"helpUrl": ""
		});
	}
};

Blockly.Blocks['senses_received_is_on'] = {
	init: function () {
		this.jsonInit({
			"message0": Blockly.Msg.SENSES_RECEIVED_IS_ON_MESSAGE,
			"output": [
				"Number",
				"Boolean"
			],
			"colour": 180,
			"tooltip": Blockly.Msg.SENSES_RECEIVED_IS_ON_TOOLTIP,
			"helpUrl": ""
		});
	}
};
