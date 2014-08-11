// WIP:
// Needs to Export!!!! (Export JSON File?)
// Needs to import exported file!!!!

(function(cb) {
    cb.Character = function() {
        var self = this;
        self.characterName = ko.observable('');
        self.characterClass = ko.observable('');
        self.characterAlignment = ko.observable('');
        self.characterBackground = ko.observable('');
        self.characterRace = ko.observable('');
        self.characterExperience = ko.observable('');

        var modifierCalculation = function (abilityScore) { return ( Math.floor(abilityScore / 2) - 5); }
        self.abilityStrength = ko.observable(10);
        self.abilityStrengthModifier = ko.computed({ read: function() { return modifierCalculation(self.abilityStrength()); } });
        self.abilityDexterity = ko.observable(10);
        self.abilityDexterityModifier = ko.computed({ read: function () { return modifierCalculation(self.abilityDexterity()); } });
        self.abilityConstitution = ko.observable(10);
        self.abilityConstitutionModifier = ko.computed({ read: function () { return modifierCalculation(self.abilityConstitution()); } });
        self.abilityIntelligence = ko.observable(10);
        self.abilityIntelligenceModifier = ko.computed({ read: function () { return modifierCalculation(self.abilityIntelligence()); } });
        self.abilityWisdom = ko.observable(10);
        self.abilityWisdomModifier = ko.computed({ read: function () { return modifierCalculation(self.abilityWisdom()); } });
        self.abilityCharisma = ko.observable(10);
        self.abilityCharismaModifier = ko.computed({ read: function () { return modifierCalculation(self.abilityCharisma()); } });

        self.savingThrowStrength = new modifierProficiency(self.abilityStrengthModifier);
        self.savingThrowDexterity = new modifierProficiency(self.abilityDexterityModifier);
        self.savingThrowConstitution = new modifierProficiency(self.abilityConstitutionModifier);
        self.savingThrowIntelligence = new modifierProficiency(self.abilityIntelligenceModifier);
        self.savingThrowWisdom = new modifierProficiency(self.abilityWisdomModifier);
        self.savingThrowCharisma = new modifierProficiency(self.abilityCharismaModifier);

        self.skillAcrobatics = new modifierProficiency(self.abilityDexterityModifier);
        self.skillAnimalHandling = new modifierProficiency(self.abilityWisdomModifier);
        self.skillArcana = new modifierProficiency(self.abilityIntelligenceModifier);
        self.skillAthletics = new modifierProficiency(self.abilityStrengthModifier);
        self.skillDeception = new modifierProficiency(self.abilityCharismaModifier);
        self.skillHistory = new modifierProficiency(self.abilityIntelligenceModifier);
        self.skillInsight = new modifierProficiency(self.abilityWisdomModifier);
        self.skillIntimidation = new modifierProficiency(self.abilityCharismaModifier);
        self.skillInvestigation = new modifierProficiency(self.abilityIntelligenceModifier);
        self.skillMedicine = new modifierProficiency(self.abilityWisdomModifier);
        self.skillNature = new modifierProficiency(self.abilityIntelligenceModifier);
        self.skillPerception = new modifierProficiency(self.abilityWisdomModifier);
        self.skillPerformance = new modifierProficiency(self.abilityCharismaModifier);
        self.skillPersuasion = new modifierProficiency(self.abilityCharismaModifier);
        self.skillReligion = new modifierProficiency(self.abilityIntelligenceModifier);
        self.skillSleightOfHand = new modifierProficiency(self.abilityDexterityModifier);
        self.skillStealth = new modifierProficiency(self.abilityDexterityModifier);
        self.skillSurvival = new modifierProficiency(self.abilityWisdomModifier);

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
    };
})(window.CharacterBuilder = window.CharacterBuilder || {});

var saveCharacter = function (character) {
    window.localStorage.setItem('5ECharacterBuilder', ko.toJSON(character));
};

var loadCharacter = function (character) {
    var loadedCharacter = window.localStorage.getItem('5ECharacterBuilder');

    if (loadedCharacter != undefined) {
        var parsed = JSON.parse(loadedCharacter);
        character.characterName(parsed.characterName);
        character.characterClass(parsed.characterClass);
        character.characterAlignment(parsed.characterAlignment);
        character.characterBackground(parsed.characterBackground);

        character.abilityStrength(parsed.abilityStrength); 
        character.abilityDexterity(parsed.abilityDexterity);
        character.abilityConstitution(parsed.abilityConstitution);
        character.abilityIntelligence(parsed.abilityIntelligence);
        character.abilityWisdom(parsed.abilityWisdom);
        character.abilityCharisma(parsed.abilityCharisma);
    }
}; 

var availableClasses = ['Cleric', 'Fighter', 'Rogue', 'Wizard'];

var availableAlignments = ['Lawful Good', 'Neutral Good', 'Chaotic Good',
                           'Lawful Neutral', 'Neutral', 'Chaotic Neutral',
                           'Lawful Evil', 'Neutral Evil', 'Chaotic Evil'];

var modifierProficiency = function(abilityModifier) {
    var self = this;

    self.proficient = ko.observable(false);
    self.bonus = abilityModifier;
    
    return this;
};