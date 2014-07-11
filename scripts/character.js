//(function(ns) {
//    ns.mything = function() {
//        return this;
//    };
//})(namespace || {});

//var mything = new Namespace.mything();

// WIP:
// Needs to SAVE!!!! (JSON?)
// Needs to Export!!!! (Export JSON File?)
// Needs to import exported file!!!!

(function(cb) {
    cb.Character = function() {
        var self = this;
        self.characterName = '';
        self.characterClass = '';
        self.characterAlignment = '';
        self.characterBackground = '';
        self.characterRace = '';
        self.characterExperience = '';

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

        self.skillAcrobatics = self.abilityDexterityModifier;

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
    var savedCharacter = {};
    savedCharacter.Strength = character.abilityStrength();

    window.localStorage.setItem('5ECharacterBuilder', JSON.stringify(savedCharacter));
};

var loadCharacter = function(character) {
    var loadedCharacter = JSON.parse(window.localStorage.getItem('5ECharacterBuilder'));
    character.abilityStrength(loadedCharacter.Strength);
}; 

var availableClasses = ['Fighter', 'Cleric', 'Wizard', 'Rogue'];

var availableAlignments = ['Lawful Good', 'Neutral Good', 'Chaotic Good',
                           'Lawful Neutral', 'Neutral', 'Chaotic Neutral',
                           'Lawful Evil', 'Neutral Evil', 'Chaotic Evil'];