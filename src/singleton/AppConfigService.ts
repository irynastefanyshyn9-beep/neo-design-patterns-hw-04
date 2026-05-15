export class AppConfigService {
    private static instance: AppConfigService;

    public readonly companyName: string = 'Acme Inc.';
    public readonly footer: string = 'Confidential';

    private constructor() {}

    static getInstance(): AppConfigService {
        if (!AppConfigService.instance) {
            AppConfigService.instance = new AppConfigService();
        }
        return AppConfigService.instance;
    }
}
