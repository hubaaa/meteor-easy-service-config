log = loglevel.createLogger('EasyServiceConfigTest', 'debug');

describe("EasyServiceConfig", function() {

  coll = ServiceConfiguration.configurations;

  before(function() {
    log.debug("before");
   });

  after(function() {
    log.debug("after");
  });

  beforeEach(function() {
    log.debug("beforeEach");
    coll.remove({})
  });

  afterEach(function() {
    log.debug("afterEach");
    stubs.restoreAll();
    spies.restoreAll();
  });

  it("should save the settings to the db", function() {

    spies.create('upsert', coll, 'upsert');

    settings = {
      serviceConfigurations: {
        github: {
          apiKey: 'xxx',
          secret: 'yyy'
        }
      }
    }

    easySettings = new practical.EasyMeteorSettings(settings);

    easyServiceConfig = new practical.EasyServiceConfig(coll, easySettings);

    easyServiceConfig.load();

    expect(spies.upsert).to.have.been.called

    githubConfig = coll.findOne( {service: 'github'} );

    expect(githubConfig.apiKey).to.equal('xxx');
    expect(githubConfig.secret).to.equal('yyy');
  });


  it("should save the settings to the db - stub version", function() {

    stubs.create('upsert', coll, 'upsert');

    settings = {
      serviceConfigurations: {
        github: {
          apiKey: 'xxx',
          secret: 'yyy'
        }
      }
    }

    easySettings = new practical.EasyMeteorSettings(settings);

    easyServiceConfig = new practical.EasyServiceConfig(coll, easySettings);

    easyServiceConfig.load();

    expect(stubs.upsert).to.have.been.calledWith({service: 'github'}, settings.serviceConfigurations.github);
  });
});
