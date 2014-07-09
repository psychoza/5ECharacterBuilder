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