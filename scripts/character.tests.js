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
		});
		it('must have abilityConstitution', function(){
			expect(character.abilityConstitution != undefined).toBe(true);
		});
		it('must have abilityIntelligence', function(){
			expect(character.abilityIntelligence != undefined).toBe(true);
		});
		it('must have abilityWisdom', function(){
			expect(character.abilityWisdom != undefined).toBe(true);
		});
		it('must have abilityCharisma', function(){			
			expect(character.abilityCharisma != undefined).toBe(true);
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
		});+
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
	    var character;
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

describe('skills list', function() {

});