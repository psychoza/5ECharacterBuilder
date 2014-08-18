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
        self.characterExperience = ko.observable(0);
        var levelArray = {
            "0": 1, "300": 2, "900": 3, "2700": 4, "6500": 5,
            "14000": 6, "23000": 7, "34000": 8, "48000": 9, "64000": 10,
            "85000": 11, "100000": 12, "120000": 13, "140000": 14, "165000": 15,
            "195000": 16,"225000": 17, "265000": 18, "305000": 19, "355000": 20,
        };

        self.characterLevel = ko.computed({
            read: function () {
                var curxp = parseInt(self.characterExperience());
                var curlvl = 1;

                for (var key in levelArray) {
                    if (curxp >= key) {
                        curlvl = levelArray[key];
                    } else {
                        return curlvl;
                    }
                }

                return curlvl;
            },
            write: function (lvl) {
                if (lvl > 20)
                    lvl = 20;
                else if (lvl < 1)
                    lvl = 1;

                for (var key in levelArray) {
                    if (lvl == levelArray[key]) {
                        self.characterExperience(parseInt(key));
                    } 
                }
            }
        });
        
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
        character.characterExperience(parsed.characterExperience);
        character.characterLevel(parsed.characterLevel);

        character.abilityStrength(parsed.abilityStrength); 
        character.abilityDexterity(parsed.abilityDexterity);
        character.abilityConstitution(parsed.abilityConstitution);
        character.abilityIntelligence(parsed.abilityIntelligence);
        character.abilityWisdom(parsed.abilityWisdom);
        character.abilityCharisma(parsed.abilityCharisma);

        character.skillAcrobatics.proficient(parsed.skillAcrobatics.proficient);
        character.skillAnimalHandling.proficient(parsed.skillAnimalHandling.proficient);
        character.skillArcana.proficient(parsed.skillArcana.proficient);
        character.skillAthletics.proficient(parsed.skillAthletics.proficient);
        character.skillDeception.proficient(parsed.skillDeception.proficient);
        character.skillHistory.proficient(parsed.skillHistory.proficient);
        character.skillInsight.proficient(parsed.skillInsight.proficient);
        character.skillIntimidation.proficient(parsed.skillIntimidation.proficient);
        character.skillInvestigation.proficient(parsed.skillInvestigation.proficient);
        character.skillMedicine.proficient(parsed.skillMedicine.proficient);
        character.skillNature.proficient(parsed.skillNature.proficient);
        character.skillPerception.proficient(parsed.skillPerception.proficient);
        character.skillPerformance.proficient(parsed.skillPerformance.proficient);
        character.skillPersuasion.proficient(parsed.skillPersuasion.proficient);
        character.skillReligion.proficient(parsed.skillReligion.proficient);
        character.skillSleightOfHand.proficient(parsed.skillSleightOfHand.proficient);
        character.skillStealth.proficient(parsed.skillStealth.proficient);
        character.skillSurvival.proficient(parsed.skillSurvival.proficient);

        character.savingThrowStrength.proficient(parsed.savingThrowStrength.proficient);
        character.savingThrowDexterity.proficient(parsed.savingThrowDexterity.proficient);
        character.savingThrowConstitution.proficient(parsed.savingThrowConstitution.proficient);
        character.savingThrowIntelligence.proficient(parsed.savingThrowIntelligence.proficient);
        character.savingThrowWisdom.proficient(parsed.savingThrowWisdom.proficient);
        character.savingThrowCharisma.proficient(parsed.savingThrowCharisma.proficient);
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