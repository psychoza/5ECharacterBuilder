describe ('character', function(){
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