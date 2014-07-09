var character = (function () {
	var self = this;
	self.characterName = '';
	self.characterClass = '';
	self.characterAlignment = '';
	self.characterBackground = '';
	self.characterRace = '';
	self.characterExperience = '';
	self.abilityStrength = 10;
	self.abilityStrengthModifier = ((self.abilityStrength / 2) - 5);
	self.abilityDexterity = '';
	self.abilityConstitution = '';
	self.abilityIntelligence = '';
	self.abilityWisdom = '';
	self.abilityCharisma = '';
	self.armorClass = '';
	self.initiative = '';
	self.speed = '';
	self.maxHitPoints = '';
	self.currentHitPoints = '';
	self.tempHitPoints = '';
	self.personalityTraits = '';
	self.ideals = '';
	self.bonds = '';
	self.flaws = '';
	self.age = '';
	self.height = '';
	self.weight = '';
	self.eyes = '';
	self.skin = '';
	self.hair = '';
	self.totalHitDice = '';
	self.currentHitDice = '';
	return this;
})();

var availableClasses = ['Fighter', 'Cleric', 'Wizard', 'Rogue'];