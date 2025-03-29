import { IMessageComposer } from '../../../../../../api';

export class WhisperGroupComposer implements IMessageComposer<ConstructorParameters<typeof WhisperGroupComposer>>
{
    private _data: ConstructorParameters<typeof WhisperGroupComposer>;

    constructor(username: string)
    {
        this._data = [ username ];
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
