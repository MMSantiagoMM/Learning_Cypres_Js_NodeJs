
context('API Testing',()=>{

    it('Test 01',()=>{
        cy.request({
            method: 'GET',
            url: 'https://swapi.dev/api/people/2',
        }).then((response)=>{
            console.log(response);
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('skin_color','gold');
            expect(response.body.films).to.have.length(6);
        });
    });

    it('Test 02',()=>{
        cy.request({
            method: 'GET',
            url: 'https://swapi.dev/api/people/2',
        }).then((response)=>{
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('skin_color','gold');
            expect(response.body.films).to.have.length(6);
            return response.body.films[1]
        }).then(secondMovie=>{
            cy.request({
                method: 'GET',
                url : secondMovie
            }).then((response)=>{
                expect(response.status).to.eq(200);
                expect(response.body.release_date).to.match(/^\d{4}-\d{2}-\d{2}$/);
                expect(response.body.characters).to.have.length.of.at.least(2);
                expect(response.body.planets).to.have.length.of.at.least(2);
                expect(response.body.starships).to.have.length.of.at.least(2);
                expect(response.body.vehicles).to.have.length.of.at.least(2);
                expect(response.body.species).to.have.length.of.at.least(2);

            })
        })
    });
    it('Test 03',()=>{
        cy.request({
            method: 'GET',
            url: 'https://swapi.dev/api/people/2',
        }).then((response)=>{
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('skin_color','gold');
            expect(response.body.films).to.have.length(6);
            return response.body.films[1]
        }).then(secondMovie=>{
            cy.request({
                method: 'GET',
                url : secondMovie
            }).then((response)=>{
                expect(response.status).to.eq(200);
                return response.body.planets[0]
            }).then(firstPlanet =>{
                cy.request({
                    method: 'GET',
                    url : firstPlanet
                }).then((response)=>{
                    expect(response.status).to.eq(200);
                    expect(response.body).to.have.property('gravity','1.1 standard');
                    expect(response.body).to.have.property('terrain','tundra, ice caves, mountain ranges');
                })
            })
        })
    });

    it('Test 04',()=>{
        cy.request({
            method: 'GET',
            url: 'https://swapi.dev/api/people/2',
        }).then((response)=>{
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('skin_color','gold');
            expect(response.body.films).to.have.length(6);
            return response.body.films[1]
        }).then(secondMovie=>{
            cy.request({
                method: 'GET',
                url : secondMovie
            }).then((response)=>{
                expect(response.body.planets).to.have.length.of.at.least(2);
                return response.body.planets[0]
            }).then(firstPlanet =>{
                cy.request({
                    method: 'GET',
                    url : firstPlanet
                }).then((response)=>{
                    expect(response.status).to.eq(200);
                    expect(response.body.url).to.eq("https://swapi.dev/api/planets/4/")
                })
            })
        })
    });

    it('Test 05',()=>{
        cy.request({
            method: 'GET',
            url: 'https://swapi.dev/api/films/7',
            failOnStatusCode:false
        }).then((response)=>{
            expect(response.status).to.eq(404);
        });

       
    });



});