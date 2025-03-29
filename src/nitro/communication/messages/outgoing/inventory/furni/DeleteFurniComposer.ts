import { IMessageComposer } from '../../../../../../api';

export class DeleteFurniComposer implements IMessageComposer<ConstructorParameters<typeof DeleteFurniComposer>>
{
    private _data: ConstructorParameters<typeof DeleteFurniComposer>;

    constructor(itemId: number)
    {
        this._data = [ itemId ];
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