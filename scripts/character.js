// WIP:
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
        self.skillAnimalHandling = self.abilityWisdomModifier;
        self.skillArcana = self.abilityIntelligenceModifier;
        self.skillAthletics = self.abilityStrengthModifier;
        self.skillDeception = self.abilityCharismaModifier;
        self.skillHistory = self.abilityIntelligenceModifier;
        self.skillInsight = self.abilityWisdomModifier;
        self.skillIntimidation = self.abilityCharismaModifier;
        self.skillInvestigation = self.abilityIntelligenceModifier;
        self.skillMedicine = self.abilityWisdomModifier;
        self.skillNature = self.abilityIntelligenceModifier;
        self.skillPerception = self.abilityWisdomModifier;
        self.skillPerformance = self.abilityCharismaModifier;
        self.skillPersuasion = self.abilityCharismaModifier;
        self.skillReligion = self.abilityIntelligenceModifier;
        self.skillSleightOfHand = self.abilityDexterityModifier;
        self.skillStealth = self.abilityDexterityModifier;
        self.skillSurvival = self.abilityWisdomModifier;

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