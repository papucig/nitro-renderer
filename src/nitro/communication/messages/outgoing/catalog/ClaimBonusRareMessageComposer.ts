import { IMessageComposer } from '../../../../../api';

export class ClaimBonusRareMessageComposer implements IMessageComposer<ConstructorParameters<typeof ClaimBonusRareMessageComposer>>
{
    private _data: ConstructorParameters<typeof ClaimBonusRareMessageComposer>;

    constructor()
    {
        this._data = [];
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
