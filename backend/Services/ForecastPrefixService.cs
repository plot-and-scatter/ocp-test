using Microsoft.Extensions.Options;

namespace backend.Services
{
    public class ForecastPrefixService
    {
        private readonly string _prefix;
        private readonly string _configMapText;
        private readonly string _secretText;

        public ForecastPrefixService(IOptions<ForecastPrefixServiceOptions> options)
        {
            _prefix = options.Value.PrefixText;
            _configMapText = options.Value.ConfigMapText;
            _secretText = options.Value.SecretText;
        }

        public string GetPrefix()
        {
          return _prefix;
        }

        public string GetConfigMapText()
        {
          return _configMapText;
        }

        public string GetSecretText()
        {
          return _secretText;
        }                
    }
}