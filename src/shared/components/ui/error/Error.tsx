import Text from '../text'
import Button from '../button'
import {ErrorProps} from './Error.types'

const Error = ({ 
    title, 
    description = "Something went wrong while fetching data. Check your connection and try again.", 
    onClick 
}: ErrorProps) => {
    return (
        <div className="flex flex-col items-center justify-center gap-4 bg-bg-base min-w-100 min-h-75 px-4 py-3 rounded-2xl border border-default">
            <div className="text-center">
                <Text variant="title">{title}</Text>
                <Text customStyle="text-fg-secondary"> {description} </Text>
            </div>
            <div>
                {onClick && (
                    <Button customStyle="bg-danger text-fg-primary" onClick={onClick}>
                        Retry
                    </Button>
                )}

            </div>
        </div>
    )
}

export default Error