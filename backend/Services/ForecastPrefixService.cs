using Microsoft.Extensions.Options;

namespace backend.Services
{
    public class ForecastPrefixService
    {
        private readonly string _prefix;

        public ForecastPrefixService(IOptions<ForecastPrefixServiceOptions> options)
        {
            _prefix = options.Value.PrefixText;
        }

        public string GetPrefix()
        {
          return _prefix;
        }
    }
}