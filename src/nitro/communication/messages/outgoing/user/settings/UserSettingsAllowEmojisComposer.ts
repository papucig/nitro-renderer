import { IMessageComposer } from '../../../../../../api';

export class UserSettingsAllowEmojisComposer implements IMessageComposer<ConstructorParameters<typeof UserSettingsAllowEmojisComposer>>
{
    private _data: ConstructorParameters<typeof UserSettingsAllowEmojisComposer>;

    constructor(value: boolean)
    {
        this._data = [value];
    }

    public getMessageArray()
    {
        return this._data;
    }

    public dispose(): void
    {
        return;
    }
}
