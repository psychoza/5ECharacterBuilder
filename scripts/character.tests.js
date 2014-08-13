window.CharacterBuilder = window.CharacterBuilder || {};

describe('character', function () {
    var character = new window.CharacterBuilder.Character();

	it('must exist', function(){
		expect(character != undefined).toBe(true);
	});
    
	describe('required properties', function(){
		it('must have characterName', function(){
			expect(character.characterName != undefined).toBe(true);
		}); 
		it('must have characterBackground', function(){
			expect(character.characterBackground != undefined).toBe(true);
		});
		it('must have characterRace', function(){
			expect(character.characterRace != undefined).toBe(true);
		});
		it('must have characterClass', function(){
			expect(character.characterClass != undefined).toBe(true);
		});
		it('must have characterAlignment', function(){
			expect(character.characterAlignment != undefined).toBe(true);
		});
		it('must have characterExperience', function(){
		    expect(character.characterExperience != undefined).toBe(true);
		    expect(character.characterExperience() == 0).toBe(true);
		});
		it('must have level', function () {
		    expect(character.characterLevel != undefined).toBe(true);
		    expect(character.characterLevel() == 1).toBe(true);
		});
		it('must have abilityStrength', function(){
		    expect(character.abilityStrength != undefined).toBe(true);
		    expect(character.abilityStrength() == 10).toBe(true);
		});
		it('must have abilityStrengthModifier', function () {
		    expect(character.abilityStrengthModifier != undefined).toBe(true);
		});
		it('must have abilityDexterity', function(){
		    expect(character.abilityDexterity != undefined).toBe(true);
		    expect(character.abilityDexterity() == 10).toBe(true);
		});
		it('must have abilityDexterityModifier', function () {
		    expect(character.abilityDexterityModifier != undefined).toBe(true);
		});
		it('must have abilityConstitution', function(){
		    expect(character.abilityConstitution != undefined).toBe(true);
		    expect(character.abilityConstitution() == 10).toBe(true);
		});
		it('must have abilityConstitutionModifier', function () {
		    expect(character.abilityConstitutionModifier != undefined).toBe(true);
		});
		it('must have abilityIntelligence', function(){
		    expect(character.abilityIntelligence != undefined).toBe(true);
		    expect(character.abilityIntelligence() == 10).toBe(true);
		});
		it('must have abilityIntelligenceModifier', function () {
		    expect(character.abilityIntelligenceModifier != undefined).toBe(true);
		});
		it('must have abilityWisdom', function(){
		    expect(character.abilityWisdom != undefined).toBe(true);
		    expect(character.abilityWisdom() == 10).toBe(true);
		});
		it('must have abilityWisdomModifier', function () {
		    expect(character.abilityWisdomModifier != undefined).toBe(true);
		});
		it('must have abilityCharisma', function(){			
		    expect(character.abilityCharisma != undefined).toBe(true);
		    expect(character.abilityCharisma() == 10).toBe(true);
		});
		it('must have abilityCharismaModifier', function () {
		    expect(character.abilityCharismaModifier != undefined).toBe(true);
		});
		it('must have armorClass', function(){
			expect(character.armorClass != undefined).toBe(true);
		});
		it('must have initiative', function(){
			expect(character.initiative != undefined).toBe(true);
		});
		it('must have speed', function(){
			expect(character.speed != undefined).toBe(true);
		});
		it('must have maxHitPoints', function(){
			expect(character.maxHitPoints != undefined).toBe(true);
		});
		it('must have currentHitPoints', function(){
			expect(character.currentHitPoints != undefined).toBe(true);
		});
		it('must have tempHitPoints', function(){
			expect(character.tempHitPoints != undefined).toBe(true);
		});
		it('must have personalityTraits', function(){
		    expect(character.personalityTraits != undefined).toBe(true);
		});
		it('must have ideals', function(){
		    expect(character.ideals != undefined).toBe(true);
		});
		it('must have bonds', function(){
		    expect(character.bonds != undefined).toBe(true);
		});
		it('must have flaws', function(){
		    expect(character.flaws != undefined).toBe(true);
		});
		it('must have age', function(){
		    expect(character.age != undefined).toBe(true);
		});
		it('must have height', function(){
		    expect(character.height != undefined).toBe(true);
		});
		it('must have weight', function(){
		    expect(character.weight != undefined).toBe(true);
		});
		it('must have eyes', function(){
		    expect(character.eyes != undefined).toBe(true);
		});
		it('must have skin', function(){
		    expect(character.skin != undefined).toBe(true);
		});
		it('must have hair', function(){
		    expect(character.hair != undefined).toBe(true);
		});
		it('must have totalHitDice', function(){
		    expect(character.totalHitDice != undefined).toBe(true);
		});
		it('must have currentHitDice', function(){
		    expect(character.currentHitDice != undefined).toBe(true);
		});
	});

	describe('ability modifiers', function () {
	    beforeEach(function() {
	        character = new CharacterBuilder.Character();
	    });

	    it('must calculate modifier at 0', function () {
	        expect(character.abilityStrength() == 10).toBe(true);
	        expect(character.abilityStrengthModifier()).toEqual(0);
	    }); 
	    it('must calculate modifier at 5', function () {
	        character.abilityStrength(20);
	        expect(character.abilityStrengthModifier()).toEqual(5);
	    }); 
	    it('must calculate modifier at 1', function () {
	        character.abilityStrength(13);
	        expect(character.abilityStrengthModifier()).toEqual(1);
	    }); 
	    it('must calculate modifier at -5', function () {
	        character.abilityStrength(1);
	        expect(character.abilityStrengthModifier()).toEqual(-5);
	    });
    });
});

describe('available classes', function(){
	it('must exist', function(){
		expect(availableClasses).toBeDefined();
	});
	it('must contain cleric', function(){
		expect(availableClasses.any('Cleric')).toBe(true);
	});
	it('must contain fighter', function(){
		expect(availableClasses.any('Fighter')).toBe(true);
	});
	it('must contain rogue', function(){
		expect(availableClasses.any('Rogue')).toBe(true);
	});
	it('must contain wizard', function(){
		expect(availableClasses.any('Wizard')).toBe(true);
	});
});

describe('available alignments', function(){
	it('must exist', function(){
		expect(availableAlignments).toBeDefined();
	});
	it('must contain lawful good', function(){
	    expect(availableAlignments.any('Lawful Good')).toBe(true);
	});
	it('must contain neutral good', function(){
	    expect(availableAlignments.any('Neutral Good')).toBe(true);
	});
	it('must contain chaotic good', function(){
	    expect(availableAlignments.any('Chaotic Good')).toBe(true);
	});
	it('must contain lawful neutral', function(){
	    expect(availableAlignments.any('Lawful Neutral')).toBe(true);
	});
	it('must contain neutral', function(){
	    expect(availableAlignments.any('Neutral')).toBe(true);
	});
	it('must contain chaotic neutral', function () {
	    expect(availableAlignments.any('Chaotic Neutral')).toBe(true);
	});
	it('must contain lawful evil', function(){
	    expect(availableAlignments.any('Lawful Evil')).toBe(true);
	});
	it('must contain neutral evil', function () {
	    expect(availableAlignments.any('Neutral Evil')).toBe(true);
	});
	it('must contain chaotic evil', function () {
	    expect(availableAlignments.any('Chaotic Evil')).toBe(true);
	});
});

describe('character skills', function () {
    var character = new window.CharacterBuilder.Character();

    describe('- skill object', function() {
        var randomSkill = new modifierProficiency(character.abilityCharismaModifier);
        character.abilityCharisma(12);

        it('must be a "skill" object', function () {
            expect(modifierProficiency).toBeDefined();
            expect(randomSkill.proficient).toBeDefined();
            expect(randomSkill.proficient()).toBe(false);
            expect(randomSkill.bonus).toBeDefined();
            expect(randomSkill.bonus()).toBe(1);
        });
    });

    it('all must exist', function() {
        expect(character.skillAcrobatics).toBeDefined();
        expect(character.skillAnimalHandling).toBeDefined();
        expect(character.skillArcana).toBeDefined();
        expect(character.skillAthletics).toBeDefined();
        expect(character.skillDeception).toBeDefined();
        expect(character.skillHistory).toBeDefined();
        expect(character.skillInsight).toBeDefined();
        expect(character.skillIntimidation).toBeDefined();
        expect(character.skillInvestigation).toBeDefined();
        expect(character.skillMedicine).toBeDefined();
        expect(character.skillNature).toBeDefined();
        expect(character.skillPerception).toBeDefined();
        expect(character.skillPerformance).toBeDefined();
        expect(character.skillPersuasion).toBeDefined();
        expect(character.skillReligion).toBeDefined();
        expect(character.skillSleightOfHand).toBeDefined();
        expect(character.skillStealth).toBeDefined();
        expect(character.skillSurvival).toBeDefined();
    });

    it('strength skills use strength modifier as value', function () {
        expect(character.skillAthletics.bonus).toBe(character.abilityStrengthModifier);
    });

    it('dexterity skills use dexterity modifier as value', function () {
        expect(character.skillAcrobatics.bonus).toBe(character.abilityDexterityModifier);
        expect(character.skillSleightOfHand.bonus).toBe(character.abilityDexterityModifier);
        expect(character.skillStealth.bonus).toBe(character.abilityDexterityModifier);
    });

    it('intelligence skills use intelligence modifier as value', function () {
        expect(character.skillArcana.bonus).toBe(character.abilityIntelligenceModifier);
        expect(character.skillHistory.bonus).toBe(character.abilityIntelligenceModifier);
        expect(character.skillInvestigation.bonus).toBe(character.abilityIntelligenceModifier);
        expect(character.skillNature.bonus).toBe(character.abilityIntelligenceModifier);
        expect(character.skillReligion.bonus).toBe(character.abilityIntelligenceModifier);
    });

    it('wisdom skills use wisdom modifier as value', function () {
        expect(character.skillAnimalHandling.bonus).toBe(character.abilityWisdomModifier);
        expect(character.skillInsight.bonus).toBe(character.abilityWisdomModifier);
        expect(character.skillMedicine.bonus).toBe(character.abilityWisdomModifier);
        expect(character.skillPerception.bonus).toBe(character.abilityWisdomModifier);
        expect(character.skillSurvival.bonus).toBe(character.abilityWisdomModifier);
    });

    it('charisma skills use charisma modifier as value', function () {
        expect(character.skillDeception.bonus).toBe(character.abilityCharismaModifier);
        expect(character.skillIntimidation.bonus).toBe(character.abilityCharismaModifier);
        expect(character.skillPerformance.bonus).toBe(character.abilityCharismaModifier);
        expect(character.skillPersuasion.bonus).toBe(character.abilityCharismaModifier);
    });
});

describe('character saving throws', function() {
    var character = new window.CharacterBuilder.Character();

    describe('saving throw properties', function() {
        it('must exist', function() {
            expect(character.savingThrowStrength).toBeDefined();
            expect(character.savingThrowStrength instanceof modifierProficiency).toBe(true);
            expect(character.savingThrowDexterity).toBeDefined();
            expect(character.savingThrowDexterity instanceof modifierProficiency).toBe(true);
            expect(character.savingThrowConstitution).toBeDefined();
            expect(character.savingThrowConstitution instanceof modifierProficiency).toBe(true);
            expect(character.savingThrowIntelligence).toBeDefined();
            expect(character.savingThrowIntelligence instanceof modifierProficiency).toBe(true);
            expect(character.savingThrowWisdom).toBeDefined();
            expect(character.savingThrowWisdom instanceof modifierProficiency).toBe(true);
            expect(character.savingThrowCharisma).toBeDefined();
            expect(character.savingThrowCharisma instanceof modifierProficiency).toBe(true);
        });
    });
});

describe('experience and level logic', function() {
    var character;
    beforeEach(function() {
        character = new window.CharacterBuilder.Character();
    });

    it('must calculate level based on experience input', function () {
        character.characterExperience(300);
        expect(character.characterLevel() == 2).toBe(true);
        character.characterExperience("4");
        expect(character.characterLevel() == 1).toBe(true);
        character.characterExperience(899);
        expect(character.characterLevel() == 2).toBe(true);
        character.characterExperience(6501);
        expect(character.characterLevel() == 5).toBe(true);
    });

    it('must calculate experience based on level input', function() {
        character.characterLevel(2);
        expect(character.characterExperience() == 300).toBe(true);
        character.characterLevel(21);
        expect(character.characterExperience() == 355000).toBe(true);
        character.characterLevel(0);
        expect(character.characterExperience() == 0).toBe(true);
    });
});

// *********************************************************
// *                                                       *
// *  Consider Changing tests to use a 'fake' database...  *
// * One that uses the key 5ECharacterBuilderTests so the  *
// * save state is not at risk for the developer and his   *
// * character.                                            *
// *                                                       *
// ********************************************************* 

describe('character storage', function () {
    describe('save functionality', function() {
        it('must exist', function () {
            expect(saveCharacter != undefined).toBe(true);
        });
        it('it calls data storage with provided character information', function () {
            var character = new window.CharacterBuilder.Character();
            var storageSpy = spyOn(window.localStorage, 'setItem');
            var savedCharacter = ko.toJSON(character);

            saveCharacter(character);

            expect(storageSpy).toHaveBeenCalledWith('5ECharacterBuilder', savedCharacter);
        });
    });

    describe('load functionality', function () {
        var character;

        beforeEach(function() {
            character = new window.CharacterBuilder.Character();
        });

        it('must exist', function () {
            expect(loadCharacter != undefined).toBe(true);
        });
        it('it calls data storage with the character builder key', function () {
            //debugger;
            var storageSpy = spyOn(window.localStorage, 'getItem');
            loadCharacter(character);
            expect(storageSpy).toHaveBeenCalledWith('5ECharacterBuilder');
        });
        //it("it must change the view model's strength to the loaded model from storage's strength", function () {
        //    character.abilityStrength(11);
        //    var storageSpy = spyOn(window.localStorage, 'getItem').and.callFake(function () {
        //        var jsonCharacter = ko.toJSON(character);
        //        return jsonCharacter;
        //    });
        //    character.abilityStrength(10);
        //    loadCharacter(character);
        //    expect(character.abilityStrength()).toEqual(11);
        //}); // it may work -Sean 2014

        describe("it must change the view model's property to the loaded model's property", function () {
            beforeEach(function () {
                character = new window.CharacterBuilder.Character();
            });

            it("abilityStrength", function () {
                character.abilityStrength(11);
                saveCharacter(character);
                character.abilityStrength(10);
                loadCharacter(character);
                expect(character.abilityStrength()).toEqual(11);
            });

            it("abilityDexterity", function () {
                character.abilityDexterity(11);
                saveCharacter(character);
                character.abilityDexterity(10);
                loadCharacter(character);
                expect(character.abilityDexterity()).toEqual(11);
            });
            it("abilityConstitution", function () {
                character.abilityConstitution(11);
                saveCharacter(character);
                character.abilityConstitution(10);
                loadCharacter(character);
                expect(character.abilityConstitution()).toEqual(11);
            });
            it("abilityIntelligence", function () {
                character.abilityIntelligence(11);
                saveCharacter(character);
                character.abilityIntelligence(10);
                loadCharacter(character);
                expect(character.abilityIntelligence()).toEqual(11);
            });
            it("abilityWisdom", function () {
                character.abilityWisdom(11);
                saveCharacter(character);
                character.abilityWisdom(10);
                loadCharacter(character);
                expect(character.abilityWisdom()).toEqual(11);
            });
            it("abilityCharisma", function () {
                character.abilityCharisma(11);
                saveCharacter(character);
                character.abilityCharisma(10);
                loadCharacter(character);
                expect(character.abilityCharisma()).toEqual(11);
            });

            it("characterName", function () {
                character.characterName('Test');
                saveCharacter(character);
                character.characterName('');
                loadCharacter(character);
                expect(character.characterName()).toEqual('Test');
            });
            it("characterClass", function () {
                character.characterClass('Fighter');
                saveCharacter(character);
                character.characterClass('');
                loadCharacter(character);
                expect(character.characterClass()).toEqual('Fighter');
            });
            it("characterAlignment", function () {
                character.characterAlignment('Neutral');
                saveCharacter(character);
                character.characterAlignment('');
                loadCharacter(character);
                expect(character.characterAlignment()).toEqual('Neutral');
            });
            it("characterBackground", function () {
                character.characterBackground('Soldier');
                saveCharacter(character);
                character.characterBackground('');
                loadCharacter(character);
                expect(character.characterBackground()).toEqual('Soldier');
            });
        });
    });
})